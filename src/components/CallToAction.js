import React from 'react'
import '../styles/CallToAction.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function CallToAction() {
    return (
        <LinkRouter to={'/cities'}><button class="CallToAction-button"> Get started
        <div class="icon">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M3.691 10h6.309l-3-7h2l7 7h5c1.322-.007 3 1.002 3 2s-1.69 1.993-3 2h-5l-7 7h-2l3-7h-6.309l-2.292 2h-1.399l1.491-4-1.491-4h1.399l2.292 2" /></svg>
        </div>
    </button>
    </LinkRouter>
        
    )
}
