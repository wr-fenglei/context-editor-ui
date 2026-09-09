function Icon({ children, size = 18, className, strokeWidth = 1.6 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}
         fill="none" stroke="currentColor" strokeWidth={strokeWidth}
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
  )
}

function CopyIcon(p) { return <Icon {...p} strokeWidth={1.5}><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></Icon> }
function PositiveIcon(p) { return <Icon {...p} strokeWidth={1.5}><path d="M7 10v10.5H4.5A1.5 1.5 0 0 1 3 19v-7.5A1.5 1.5 0 0 1 4.5 10H7Z"/><path d="M7 10h2l3.35-6.05a1.55 1.55 0 0 1 2.9.98L14.75 9H19a2 2 0 0 1 1.94 2.5L19.05 19a2 2 0 0 1-1.94 1.5H7"/></Icon> }
function NegativeIcon(p) { return <Icon {...p} strokeWidth={1.5}><path d="M7 14V3.5H4.5A1.5 1.5 0 0 0 3 5v7.5A1.5 1.5 0 0 0 4.5 14H7Z"/><path d="M7 14h2l3.35 6.05a1.55 1.55 0 0 0 2.9-.98L14.75 15H19a2 2 0 0 0 1.94-2.5L19.05 5a2 2 0 0 0-1.94-1.5H7"/></Icon> }
function BranchIcon(p) { return <Icon {...p} strokeWidth={1.5}><circle cx="6" cy="6" r="2.25"/><circle cx="6" cy="18" r="2.25"/><circle cx="18" cy="6" r="2.25"/><path d="M6 8.25v7.5M8.25 6h6.5A3.25 3.25 0 0 1 18 9.25v6.5"/></Icon> }
function PlusIcon(p) { return <Icon {...p} strokeWidth={1.8}><path d="M12 5v14M5 12h14"/></Icon> }
function ComposerPlusIcon(p) { return <Icon {...p} strokeWidth={1.3}><path d="M12 3.5v17M3.5 12h17"/></Icon> }
function ShieldIcon(p) { return <Icon {...p} strokeWidth={1.6}><path d="M12 2.75 19.25 6v5.75c0 4.55-2.75 7.65-7.25 9.5-4.5-1.85-7.25-4.95-7.25-9.5V6L12 2.75Z"/><path d="m8.25 9.25 2.25 2.25-2.25 2.25M12.75 14h3"/></Icon> }
function MicIcon(p) { return <Icon {...p} strokeWidth={1.8}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></Icon> }
function SendIcon(p) { return <Icon {...p} strokeWidth={1.8}><path d="M12 20V5M6 11l6-6 6 6"/></Icon> }
function ContextIcon(p) { return <Icon {...p}><path d="M8.5 4H6a1.5 1.5 0 0 0-1.5 1.5v13A1.5 1.5 0 0 0 6 20h2.5"/><path d="M15.5 4H18a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 18 20h-2.5"/><path d="M9.5 9h5M9.5 12h5M9.5 15h3"/></Icon> }
function FileIcon(p) { return <Icon {...p}><path d="M6.5 3h7L18 7.5V20a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M13 3v5h5"/></Icon> }
function SelectionIcon(p) { return <Icon {...p}><path d="M8 4H6.5A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20H8"/><path d="M16 4h1.5A1.5 1.5 0 0 1 19 5.5v13A1.5 1.5 0 0 1 17.5 20H16"/><path d="M12 8v8"/></Icon> }
function InstructionIcon(p) { return <Icon {...p}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></Icon> }
function NoteIcon(p) { return <Icon {...p}><path d="M5 7h14M5 12h14M5 17h8"/></Icon> }
function TrashIcon(p) { return <Icon {...p}><path d="M5 7h14"/><path d="M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7"/><path d="M7 7l1 12.5A1 1 0 0 0 9 20h6a1 1 0 0 0 1-1.5L17 7"/></Icon> }
function ArrowUpIcon(p) { return <Icon {...p}><path d="M12 19V6M6.5 11.5 12 6l5.5 5.5"/></Icon> }
function ArrowDownIcon(p) { return <Icon {...p}><path d="M12 5v13M6.5 12.5 12 18l5.5-5.5"/></Icon> }
function CheckIcon(p) { return <Icon {...p}><path d="M5 12.5 9.5 17 19 7"/></Icon> }
function ChevronDownIcon(p) { return <Icon {...p}><path d="m6 9 6 6 6-6"/></Icon> }

Object.assign(window, {
  Icon, CopyIcon, PositiveIcon, NegativeIcon, BranchIcon, PlusIcon, ComposerPlusIcon,
  ShieldIcon, MicIcon, SendIcon, ContextIcon, FileIcon, SelectionIcon, InstructionIcon,
  NoteIcon, TrashIcon, ArrowUpIcon, ArrowDownIcon, CheckIcon, ChevronDownIcon
})
