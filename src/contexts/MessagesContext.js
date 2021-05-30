import {createContext} from 'react';

const MessagesContext = createContext( 
    { 
        messages: [''],
    }
)

export default MessagesContext;
