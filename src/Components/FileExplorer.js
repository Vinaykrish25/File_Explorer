import React from 'react'
import { useState } from 'react'
import "./FileExplorer.css"

const FileExplorer = ({ files }) => {
    const [open, setOpen] = useState(false)

    function folderOpen(){
        setOpen(!open)
    }

    if (files.type === "file") {
        return (
            <>
                <p className='fl-name'>{files.name}</p>
            </>
        )
    }
    else {
            return(
                <div className='folder'>
                <h4 className='fd-name' onClick={folderOpen}>{open ? "📂" : "📁"}{files.name}</h4>
                {
                    open && files.items.map((element, index) => <FileExplorer key={index} files={element} />)
                }
            </div>
            )
        }
    }


export default FileExplorer