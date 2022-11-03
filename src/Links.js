import "./Links.css";

function Links() {
  return (
    <>
      <div id="links-container">
        <a href="https://training.zuri.team/">
          <button id="btn__zuri" className="btn">
            Zuri Training
          </button>
        </a>
        <a href="http://books.zuri.team">
          <button id="books" className="btn">
            Zuri Books
          </button>
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=marvellousadesanya">
          <button id="book__python" className="btn">
            Python Book
          </button>
        </a>
        <a href="https://background.zuri.team">
          <button id="pitch" className="btn">
            Zuri Background
          </button>
        </a>
        <a href="https://books.zuri.team/design-rules">
          <button id="book__design" className="btn">
            Book designs
          </button>
        </a>
        <a href="/contact">
          <button id="contact" className="btn">
            Contact Me
          </button>
        </a>
      </div>
    </>
  );
}

export default Links;
