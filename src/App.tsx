import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <CollapseUI TAB_TITLE={"Tab 1"} />
    </>
  )
}

export default App

interface ICollapseUI {
  TAB_TITLE: string,
}

const CollapseUI = (props: ICollapseUI) => {
  const [modeSymbol, setModeSymbol] = useState<boolean>(false)
  const refBtn = useRef()
  const refContent = useRef()

  useEffect(() => {
    window.onload = (event) => {
      if (refBtn && refBtn.current) {
        refBtn.current.addEventListener("click", handleClick, false)
      }
    };

    function handleClick(e) {
      this.classList.toggle("active");
      // this.classList.add("active");
      var content = this.nextElementSibling;
      if (!this.classList.contains("active") && content.style.maxHeight) {
        content.style.maxHeight = null;
      } else if (this.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      setModeSymbol(prev => !prev)
      e.stopPropagation();
      e.preventDefault();
    }

  }, [refBtn])

  return (<>
    <button ref={refBtn} type="button" className="collapsible" style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}><span>{props.TAB_TITLE}</span> <span><strong>{modeSymbol ? "-" : "+"}</strong></span></button>
    <div ref={refContent} className="content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa tempora est excepturi hic suscipit non odio cum eveniet nostrum! Veniam odio excepturi corrupti eum pariatur cumque eius, unde alias.</p>
    </div>
  </>)
}