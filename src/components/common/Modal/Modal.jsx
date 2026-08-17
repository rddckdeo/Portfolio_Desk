// components/common/Modal/Modal.jsx
import { useEffect } from 'react'

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    }) {
        
    // ESC 키로 닫기
    useEffect(() => {
        function handleEsc(e) {
        if (e.key === 'Escape') onClose()
        }
        if (isOpen) document.addEventListener('keydown', handleEsc)
        return () => document.removeEventListener('keydown', handleEsc)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>×</button>
            {title && <h2 className="modal-title">{title}</h2>}
            {children}
        </div>
        </div>
    )
}