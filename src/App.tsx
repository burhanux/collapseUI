import { useEffect, useRef, useState } from 'react'
import './App.css'

const SampleData = [
  { name: "Tab1", url: "https://google.com", timestamp: new Date().toLocaleString() },
  { name: "Tab2", url: "https://google.com", timestamp: new Date().toLocaleString() },
  { name: "Tab3", url: "https://google.com", timestamp: new Date().toLocaleString() },
  { name: "Tab4", url: "https://google.com", timestamp: new Date().toLocaleString() },
]

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
  const TAB_COLOR = "rgba(51, 170, 51, 0.8)";
  const EL_BG_COLOR = "rgba(51, 170, 51, 0.2)"

  useEffect(() => {
    window.onload = (event) => {
      if (refBtn && refBtn.current) {
        refBtn.current.addEventListener("click", handleClick, false)
      }
    };

    function handleClick(e) {
      this.classList.toggle("active");
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
    <button ref={refBtn} type="button" className="collapsible" style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", }}><span>{props.TAB_TITLE}</span> <span><strong>{modeSymbol ? "-" : "+"}</strong></span></button>
    <div ref={refContent} className="content">
      {SampleData.map((data: { name: string, url: string, timestamp: string }, index: number) => <CollapseUIEl key={index} name={data.name} url={data.url} date={data.timestamp} RGBABorder={TAB_COLOR} RGBAContainer={EL_BG_COLOR} />)}
    </div>
  </>)
}

interface ICollapseUIEl {
  name: string,
  date: string,
  url: string
  RGBABorder?: string,
  RGBAContainer?: string,
}

const CollapseUIEl = (props: ICollapseUIEl) => {
  const borderColor = props.RGBABorder ? props.RGBABorder : "inherit";
  const bgColor = props.RGBAContainer ? props.RGBAContainer : "inherit";
  const ElColor = { borderColor: borderColor, backgroundColor: bgColor }
  return (
    <div style={{ display: "flex", padding: "0.5rem", justifyContent: "space-between", border: "2px solid", borderRadius: "5px", marginTop: "0.5rem", ...ElColor }}>
      <div>{props.name}</div>
      <div>{props.date}</div>
      <div>{props.url}</div>
    </div>
  )
}