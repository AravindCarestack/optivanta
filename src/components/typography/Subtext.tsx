const Subtext = (props) => {
  return <div className={`text-[#FFB801] text-sm font-bold uppercase ${props.className}`}>
    {props.children}
  </div>
}

export default Subtext
