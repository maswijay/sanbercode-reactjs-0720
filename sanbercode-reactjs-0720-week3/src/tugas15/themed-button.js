import {ThemeContext, themes} from './theme-context';
import { useContext } from 'react';

export const ThemedButton = () =>{
    const [props, theme] = useContext(ThemeContext)
    
    return(
        <button 
        {...props}
        style={{backgroundColor: theme.background}}
        />
    )
}

export default ThemedButton