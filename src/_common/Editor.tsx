import {
  AdmonitionDirectiveDescriptor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ChangeCodeMirrorLanguage,
  codeBlockPlugin,
  codeMirrorPlugin,
  CodeToggle,
  ConditionalContents,
  CreateLink,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  InsertAdmonition,
  InsertCodeBlock,
  InsertFrontmatter,
  InsertImage,
  InsertSandpack,
  InsertTable,
  InsertThematicBreak,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
  SandpackConfig,
  sandpackPlugin,
  ShowSandpackInfo,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";

export default function Editor() {
  const simpleSandpackConfig: SandpackConfig = {
    defaultPreset: "react",
    presets: [
      {
        label: "React",
        name: "react",
        meta: "live react",
        sandpackTemplate: "react",
        sandpackTheme: "light",
        snippetFileName: "/App.js",
        snippetLanguage: "jsx",
      },
    ],
  };

  return (
    <MDXEditor
      markdown={"Hello, World!"}
      plugins={[
        tablePlugin(),
        imagePlugin({
          imageUploadHandler: () => {
            return Promise.resolve("https://picsum.photos/200/300");
          },
          imageAutocompleteSuggestions: ["https://picsum.photos/200/300", "https://picsum.photos/200"],
        }),
        codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
        sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
        headingsPlugin(),
        frontmatterPlugin(),
        markdownShortcutPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
        codeMirrorPlugin({ codeBlockLanguages: { js: "JavaScript", ts: "TypeScript", css: "CSS" } }),
        toolbarPlugin({
          toolbarClassName: "my-classname",
          toolbarContents: () => (
            <>
              <ConditionalContents
                options={[
                  { when: (editor) => editor?.editorType === "code block", contents: () => <ChangeCodeMirrorLanguage /> },
                  { when: (editor) => editor?.editorType === "sand pack", contents: () => <ShowSandpackInfo /> },
                  {
                    fallback: () => (
                      <>
                        <InsertCodeBlock />
                        <InsertSandpack />
                      </>
                    ),
                  },
                ]}
              />
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <BlockTypeSelect /> {/* Fix */}
              <CodeToggle /> {/* 색상 커스텀 */}
              <CreateLink />
              <InsertAdmonition />
              <InsertFrontmatter />,
              <InsertImage />
              <InsertTable />
              <InsertThematicBreak />
              <ListsToggle />
            </>
          ),
        }),
      ]}
    />
  );
}
