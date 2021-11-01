export default function Filter({setProductFilter, setSearchTerm}) {

  const filterHandler = (e) => {
    const filter = e.target.innerText;

    setProductFilter(filter)
  }
  
  return (
    <div className="mb-16 flex gap-20 justify-center flex-wrap md:gap-10 md:px-6">
      <form className="space-x-5">
        <label htmlFor="search">Looking for</label>
        <input 
          onInput={(e) => setSearchTerm(e.target.value)}
          className="focus:shadow-inner outline-none shadow-xl filter drop-shadow-md py-[6px] px-[36px] text-center rounded-md"
          type="text" 
          id="search" 
          placeholder="start typing here..."/>
      </form>

      <section className="flex gap-9 items-center">
        <h3>Or filter</h3>
        <div className="flex gap-4">
          <button 
            onClick={filterHandler}
            className="btn-filter">
            Brazil
          </button>
          <button 
            onClick={filterHandler}
            className="btn-filter">
            Kenya
          </button>
          <button 
            onClick={filterHandler}
            className="btn-filter">
            Columbia
          </button>
        </div>
      </section>

    </div>
  )
}
