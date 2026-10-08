import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyEditor = ({ value, setValue }) => {

    return (
        <Editor

            apiKey="xc2tjdgtju0gtfp989h17ah3suv7t6lg5sfxytzd6sjx2xok"

            value={value}

            onEditorChange={(content) => {
                setValue(content);
            }}

            init={{
                height: 400,

                menubar: true,

                plugins: [
                    "lists",
                    "link",
                    "table",
                    "code"
                ],

                toolbar:
                    "undo redo | " +
                    "bold italic underline | " +
                    "bullist numlist | " +
                    "link table | code"
            }}
        />
    );
};

export default TinyEditor;