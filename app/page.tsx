"use client"
import classNames from "classnames"
import { Button } from "./components/Button"
import { FaRotate, MagnifyingMinus, MagnifyingPlus } from "./components/FaIcons"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Spinner } from "./components/Spinner"
import { FileDrop } from "./components/FileDrop"
import { RoundedIconButton } from "./components/RoundedIconButton"
import { downloadBlob } from "./lib/downloadBlob"
import { fileToUInt8Array } from "./lib/filetToUInt8Array"
import { removeFileExt } from "./lib/removeFileExt"
import { PDFDocument, degrees } from "pdf-lib"
import { FC, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

interface IPdfPage {
	pageNum: number
	rotation: number
}

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`
export default function RotatePdf() {
	const [pages, setPages] = useState<IPdfPage[]>([])
	const [isLoadingPdf, setIsLoadingPdf] = useState(false)
	const [pdfFile, setPdfFile] = useState<File | undefined>(undefined)
	const [pdfData, setPdfData] = useState<Uint8Array | undefined>(undefined)
	const [pageWidth, setPageWidth] = useState(200)
	const [fileName, setFileName] = useState("")
	const minPageWidth = 100
	const maxPageWidth = 500

	const addFiles = async (files: FileList) => {
		setIsLoadingPdf(true)

		try {
			const file = files[0]
			const data = await fileToUInt8Array(file)
			const dataCopy = new Uint8Array(data)
			setFileName(file.name)
			setPdfData(dataCopy)
			setPdfFile(file)
		} catch (err) {
			console.warn(err)
		}
	}

	const onDownload = async () => {
		const downloadDoc = await PDFDocument.load(pdfData!)
		const pageCount = downloadDoc.getPageCount()
		for (let i = 0; i < pageCount; i++) {
			const page = downloadDoc.getPage(i)
			page.setRotation(degrees(pages[i].rotation))
		}

		const bytes = await downloadDoc.save()
		const blob = new Blob([bytes], { type: "application/pdf" })
		downloadBlob(blob, `${removeFileExt(fileName)}.pdf`)
	}

	const onRotateAll = () => {
		const newPages = pages.map(p => {
			p.rotation += 90
			return p
		})
		setPages(newPages)
	}

	const onZoom = (increase: boolean) => {
		if (increase) {
			setPageWidth(Math.min(pageWidth + 50, maxPageWidth))
		} else {
			setPageWidth(Math.max(pageWidth - 50, minPageWidth))
		}
	}

	const onClearPDF = () => {
		setPages([])
		setPdfData(undefined)
	}

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		const list = Array.from({ length: numPages }, (_, i) => ({
			rotation: 0,
			pageNum: i + 1,
		}))
		setPages(list)
		setIsLoadingPdf(false)
	}

	return (
		<main>
			<Header />
			<div className="bg-[#f7f5ee] text-black">
				<div className="container mx-auto py-20 space-y-5">
					<div className="flex flex-col text-center !mb-10 space-y-5">
						<h1 className="text-5xl font-serif">Rotate PDF Pages</h1>
						<p className="mt-2 text-gray-600 max-w-lg mx-auto">
							Simply click on a page to rotate it. You can then download your
							modified PDF.
						</p>
					</div>

					{pages.length > 0 && (
						<div className="flex justify-center items-center space-x-3 selecto-ignore">
							<Button className="!w-auto" onClick={onRotateAll}>
								Rotate all
							</Button>
							<Button
								className="!w-auto !bg-gray-800"
								onClick={onClearPDF}
								aria-label="Remove this PDF and select a new one"
								data-microtip-position="top"
								role="tooltip"
							>
								Remove PDF
							</Button>
							<RoundedIconButton
								disabled={pageWidth === maxPageWidth}
								aria-label="Zoom in"
								data-microtip-position="top"
								role="tooltip"
								className="!bg-white"
								onClick={() => onZoom(true)}
							>
								<MagnifyingPlus className="w-5 h-5" />
							</RoundedIconButton>
							<RoundedIconButton
								disabled={pageWidth === minPageWidth}
								aria-label="Zoom out"
								data-microtip-position="top"
								role="tooltip"
								className="!bg-white"
								onClick={() => onZoom(false)}
							>
								<MagnifyingMinus className="w-5 h-5" />
							</RoundedIconButton>
						</div>
					)}

					{pages.length === 0 && !isLoadingPdf && (
						<div className="w-full flex justify-center">
							<FileDrop onFileChange={addFiles} />
						</div>
					)}

					{isLoadingPdf && (
						<div className="flex justify-center">
							<Spinner color="black" />
						</div>
					)}
					<Document
						file={pdfFile}
						onLoadSuccess={onDocumentLoadSuccess}
						onLoadError={() => setIsLoadingPdf(false)}
						noData={null}
						loading={null}
					>
						{!isLoadingPdf && (
							<div className="flex flex-wrap justify-center">
								{pages.map((page, i) => {
									return (
										<div
											key={i}
											className="m-3"
											style={{
												maxWidth: `${pageWidth}px`,
												flex: `0 0 ${pageWidth}px`,
											}}
										>
											<PdfPage
												index={i}
												width={pageWidth - 24}
												name={`${i + 1}`}
												rotation={page.rotation}
												onRotate={degrees => {
													page.rotation = degrees
													setPages([...pages])
												}}
											/>
										</div>
									)
								})}
							</div>
						)}
					</Document>

					{pages.length > 0 && (
						<div className="flex flex-col justify-center items-center space-y-3 selecto-ignore">
							<Button
								onClick={onDownload}
								className="!w-auto shadow"
								aria-label="Split and download PDF"
								data-microtip-position="top"
								role="tooltip"
							>
								Download
							</Button>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</main>
	)
}

interface IPdfPageProps {
	index: number
	name: string
	rotation: number
	width: number
	onRotate(degrees: number): void
}
const PdfPage: FC<IPdfPageProps> = ({
	index,
	name,
	rotation,
	width,
	onRotate,
}) => {
	return (
		<div
			className="relative cursor-pointer pdf-page"
			data-page-num={index}
			onClick={() => onRotate(rotation + 90)}
		>
			<div
				className={
					"absolute z-10 top-1 right-1 rounded-full p-1 hover:scale-105 hover:fill-white bg-[#ff612f] fill-white"
				}
			>
				<FaRotate className="w-3" />
			</div>
			<div className="overflow-hidden transition-transform">
				<div
					className={
						"relative h-full w-full flex flex-col justify-between items-center shadow-md p-3 bg-white hover:bg-gray-50"
					}
				>
					<div
						className={classNames(
							"pointer-events-none w-full shrink object-contain transition-transform "
						)}
						style={{
							transform: `rotate(${rotation}deg)`,
						}}
					>
						<Page pageIndex={index} width={width} renderMode="canvas" />
					</div>

					<div className="w-[90%] text-center shrink-0 text-xs italic overflow-hidden text-ellipsis whitespace-nowrap">
						{name}
					</div>
				</div>
			</div>
		</div>
	)
}
