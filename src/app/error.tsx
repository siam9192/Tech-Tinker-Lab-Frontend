'use client'
const ErrorPage = () => {
   
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
            <p className="text-xl text-gray-600 mb-6">We can't seem to find the page you're looking for.</p>
            {/* <div className="space-x-4">
              <Link href={'/'} >
              <button

className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
Go Back
</button>
              </Link>
                <button
               
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Go Home
                </button>
            </div> */}
        </div>
    );
};

export default ErrorPage;
