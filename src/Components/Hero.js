import Map from "./Map";


export default function Hero (){
    return(
        <>
        <section className="bg-gray-800 h-full text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Geografia Romaniei interactiva
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Alege un judet pentru a incepe
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="https://quizisto.netlify.app" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Test de cunostinte</a>
			</div>
		</div>
		<div className="flex w-full h-full">
        <Map/>
		</div>
	</div>
</section>
</>
    )
}