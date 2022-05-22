import './App.css';

function App() {
  return (
    <div className='bg-bg-mainBackground flex flex-col justify-center min-h-screen'>
      <div className="App container bg-bg-darkDesaturatedBlue flex md:flex-row flex-col-reverse rounded-md overflow-hidden">
        <div className='left md:w-1/2 w-full p-16'>
          <h2 className=' text-white font-semibold text-4xl'>
            Get <span className=' text-softViolet'>insights</span> that help your business grow.
          </h2>
          <p className=' text-SlightlyTransparentWhite py-8 text-2xl md:text-left text-center'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          <div className='hub flex flex-col md:flex-row justify-between pt-8'>
            <div className='companies'>
              <h4>10K+</h4>
              <p>COMPANIES</p>
            </div>
            <div className='templates'>
              <h4>314</h4>
              <p>TEMPLATEs</p>
            </div>
            <div className='queries'>
              <h4>12M+</h4>
              <p>QUERIES</p>
            </div>
          </div>
        </div>
        <div className='right w-full md:w-1/2 bg-no-repeat bg-cover h-60 md:h-auto'>
          <div className='bg-bg-softViolet w-full h-full opacity-75'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
