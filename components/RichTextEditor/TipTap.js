
import { useEditor, EditorContent ,Editor, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div classname="bg-slate-300 py-4" >
      <button 
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active mx-4 px-1 font-bold' : ' border-slate-500 border-2 rounded-lg mx-1 px-1 '}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active  mx-4 px-1 font-bold' : ' border-slate-500 border-2 rounded-lg mx-1 px-1 '}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}
      className={editor.isActive('blockquote') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}
      className={editor.isActive('blockquote') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}
       className={editor.isActive('blockquote') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}
       className={editor.isActive('blockquote') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}>
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
        className={editor.isActive('blockquote') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}>
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
        className={editor.isActive('blockquote') ? 'is-active' : ' border-slate-500 border-2 rounded-lg mx-1 px-1'}>
     
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : 'border-slate-500 border-2 rounded-lg mx-1 px-1 '}
      >
        purple
      </button>
    </div>

  )
}

const Tiptap =({setEditorContent, setHtmldesc}) => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
       
       
        },
        
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: `
     `,
     onUpdate:({editor})=>{
      const edcontent=editor.getJSON();
      setEditorContent(edcontent);
      const html=editor.getHTML();
      setHtmldesc(html);
     }
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap