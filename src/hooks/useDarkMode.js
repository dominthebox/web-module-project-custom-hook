import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [ darkMode, setDarkMode ] = useLocalStorage( 'darkModeEnabled', false )

    return ([ darkMode, setDarkMode ])
}

export default useDarkMode