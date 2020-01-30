import React from 'react';

//import { render } from "react-dom";

import Form from "react-jsonschema-form";
import fields from "react-jsonschema-form-extras";
import typeahead from "../../Schema/order"

const formSchema = props =>{

    return (
        <Form {...typeahead} fields={fields} />
    )
}

export default formSchema;