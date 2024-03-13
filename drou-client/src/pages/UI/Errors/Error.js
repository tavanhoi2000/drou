import sytle from './error.module.scss'
function Error() {
  return (
    <main className={sytle.main}>
      <h1 className={sytle.h1}>
        4
        <span className={sytle.icon}>
        <i className="fa-solid fa-ghost"></i>
        </span>
        4
      </h1>
      <h2 className={sytle.h2}>Error: 404 page not found</h2>
      <p className={sytle.p}>Sorry, the page you're looking for cannot be accessed</p>
    </main>
  );
}

export default Error;
