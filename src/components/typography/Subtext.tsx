const Subtext = (props) => {
  return <div className={`text-[#f768d1] text-sm font-bold uppercase ${props.className}`}>
    {props.children}
  </div>
}

export default Subtext
