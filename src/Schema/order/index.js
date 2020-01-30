const formData = {
    orders: [
      { order: "sdw" },
      { order: "Metabolic Panel" },
      { order: "CAT, Head with contrast" },
    ],
  };
  
  const schema = {
    type: "object",
    properties: {
      orders: {
        type: "array",
        title: "Orders",
        items: {
          type: "object",
          properties: {
            order: {
              type: "string",
              title: "Order",
            },
          },
        },
      },
    },
  };
  
  const uiSchema = {
    "ui:order": ["orders"],
    orders: {
      classNames: "col-md-12",
      "ui:field": "collapsible",
      collapse: {
        field: "table",
        collapsed: false,
        icon: {
          add: "glyphicon glyphicon-plus-sign glyPhiconGreen",
        },
        addTo: "self",
      },
      table: {
        leftActions: [
         
       
        ],
        rightActions: [
          {
            action: "delete",
            icon: "glyphicon glyphicon-trash",
            text: "Delete",
            displayName: "Right Panel"

          },
        ],
      },
    },
  };
  
  export default { schema, uiSchema, formData };
  