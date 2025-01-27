// Import the Alignment plugin
import { Editor } from "@tinymce/tinymce-react";
export type TextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export const TextEditor = ({ value, onChange }: TextEditorProps) => {
  return (
    <Editor
      value={value}
      onEditorChange={onChange}
      apiKey="ncp2awlvevpwp07lbry0h1419mofvw0okr2q3ui0q76a7os3"
      init={{
        height: 380,

        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough |  table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
      }}
    />
  );
};
