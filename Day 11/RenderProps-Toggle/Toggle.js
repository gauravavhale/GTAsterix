const Toggle=({render})=>{
    const [isOn,setIsOn] = React.useState(false)

    const toggle = () => setIsOn( prev => !prev)

    return render({isOn, toggle})
}