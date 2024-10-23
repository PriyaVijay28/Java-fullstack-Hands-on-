export default function Style(){
    let myStyle={color:'blue',background:'yellow'}
    return(
        <>
        <h1 style={myStyle}>Using javascript object</h1>
        <h1 style={{color:'red',background:'pink'}}>Using inline css</h1>
        </>
    )
}