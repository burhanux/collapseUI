import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // var coll: any = document.getElementsByClassName("collapsible");
    // var i;
    // console.log("coll", coll)
    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener("click", handleClick, false)
    // }

    // console.log(`Counter `, i)

    // function handleClick(e) {

    //   console.log("e", e)
    //   console.log("this", this)
    //   console.log('this.classList.contains("active)"', this.classList.contains("active"))
    //   // this.classList.toggle("active");
    //   this.classList.add("active");
    //   var content = this.nextElementSibling;
    //   if (!this.classList.contains("active") && content.style.maxHeight) {
    //     console.log("1 content.style.maxHeight", content.style.maxHeight)
    //     content.style.maxHeight = null;
    //   } else if (this.classList.contains("active")) {
    //     console.log("2 content.scrollHeight", content.scrollHeight)
    //     console.log("2 content.style.maxHeight", content.style.maxHeight)
    //     content.style.maxHeight = content.scrollHeight + "px";
    //   }
    //   e.stopPropagation();
    //   e.preventDefault();
    // }
  }, [])
  return (
    <>
      <CollapseUI />
    </>
  )
}

export default App


const CollapseUI = () => {
  const refBtn = useRef()
  const refContent = useRef()

  useEffect(() => {
    console.log("refBtn", refBtn)
    console.log("refContent", refContent)
    window.onload = (event) => {
      if (refBtn && refBtn.current) {
        refBtn.current.addEventListener("click", handleClick, false)
      }
    };

    function handleClick(e) {
      console.log("e", e)
      console.log("this", this)
      console.log('this.classList.contains("active)"', this.classList.contains("active"))
      this.classList.toggle("active");
      // this.classList.add("active");
      var content = this.nextElementSibling;
      if (!this.classList.contains("active") && content.style.maxHeight) {
        console.log("1 content.style.maxHeight", content.style.maxHeight)
        content.style.maxHeight = null;
      } else if (this.classList.contains("active")) {
        console.log("2 content.scrollHeight", content.scrollHeight)
        console.log("2 content.style.maxHeight", content.style.maxHeight)
        content.style.maxHeight = content.scrollHeight + "px";
      }
      e.stopPropagation();
      e.preventDefault();
    }

  }, [refBtn])

  return (<>
    <button ref={refBtn} type="button" className="collapsible">Open Collapsible</button>
    <div ref={refContent} className="content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa tempora est excepturi hic suscipit non odio cum eveniet nostrum! Veniam odio excepturi corrupti eum pariatur cumque eius, unde alias.</p>
    </div>
  </>)
}