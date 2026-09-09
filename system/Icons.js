function Icon({ name, children, size = 18, className = '', strokeWidth }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={`ui-icon ${className}`}
         fill="none" stroke="currentColor" strokeWidth={strokeWidth || 1.8}
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {name ? ContextEditorUIIcons.nodes[name].map(([tag, attrs], index) => React.createElement(tag, { ...attrs, key: index })) : children}
    </svg>
  )
}

function CopyIcon(props) { return <Icon name="copy" {...props}/> }
function PositiveIcon(props) { return <Icon name="thumbs-up" {...props}/> }
function NegativeIcon(props) { return <Icon name="thumbs-down" {...props}/> }
function BranchIcon(props) { return <Icon name="git-branch" {...props}/> }
function PlusIcon(props) { return <Icon name="plus" {...props}/> }
function ShieldIcon(props) { return <Icon name="shield-check" {...props}/> }
function MicIcon(props) { return <Icon name="mic" {...props}/> }
function SendIcon(props) { return <Icon name="arrow-up" {...props}/> }
function ContextIcon(props) { return <Icon name="square-pen" {...props}/> }
function FileIcon(props) { return <Icon name="file-text" {...props}/> }
function SelectionIcon(props) { return <Icon name="text-cursor-input" {...props}/> }
function InstructionIcon(props) { return <Icon name="target" {...props}/> }
function NoteIcon(props) { return <Icon name="sticky-note" {...props}/> }
function TrashIcon(props) { return <Icon name="trash-2" {...props}/> }
function ArrowUpIcon(props) { return <Icon name="arrow-up" {...props}/> }
function ArrowDownIcon(props) { return <Icon name="arrow-down" {...props}/> }
function CheckIcon(props) { return <Icon name="check" {...props}/> }
function ChevronDownIcon(props) { return <Icon name="chevron-down" {...props}/> }
function ChevronRightIcon(props) { return <Icon name="chevron-right" {...props}/> }
function GlobeIcon(props) { return <Icon name="globe" {...props}/> }
function TerminalIcon(props) { return <Icon name="square-terminal" {...props}/> }
function ToolboxIcon(props) { return <Icon name="blocks" {...props}/> }
function CodeIcon(props) { return <Icon name="code-xml" {...props}/> }
function AgentIcon(props) { return <Icon name="bot" {...props}/> }
function PaletteIcon(props) { return <Icon name="palette" {...props}/> }
function ChipIcon(props) { return <Icon name="cpu" {...props}/> }
function BookIcon(props) { return <Icon name="book-open" {...props}/> }
function TravelIcon(props) { return <Icon name="plane" {...props}/> }
function SportIcon(props) { return <Icon name="dumbbell" {...props}/> }
function MusicIcon(props) { return <Icon name="music-2" {...props}/> }
function ComposerPlusIcon(props) { return <PlusIcon {...props}/> }

Object.assign(window, { Icon, ComposerPlusIcon, CopyIcon, PositiveIcon, NegativeIcon, BranchIcon, PlusIcon, ShieldIcon, MicIcon, SendIcon, ContextIcon, FileIcon, SelectionIcon, InstructionIcon, NoteIcon, TrashIcon, ArrowUpIcon, ArrowDownIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon, GlobeIcon, TerminalIcon, ToolboxIcon, CodeIcon, AgentIcon, PaletteIcon, ChipIcon, BookIcon, TravelIcon, SportIcon, MusicIcon })
