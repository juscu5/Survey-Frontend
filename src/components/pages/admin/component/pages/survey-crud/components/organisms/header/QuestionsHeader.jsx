export const QuestionsHeader = ({
    headerQuestions: [
    { 
        title: "ID", 
        field: "Q_ID", 
        editable: 'never',
        initialEditValue: "AUTO GENERATED",
        filtering: false,
        headerStyle: {
          paddingLeft: '285px'
        }
      },
      { 
        title: "Questions", 
        field: "QUESTIONS", 
        filtering: false,
        headerStyle: {
          paddingLeft: '255px'
        },
        validate: rowData => (rowData.QUESTIONS ? true : 'Questions can not be empty')   
      },
      { 
        title: "Status", 
        field: "STATUS", 
        initialEditValue: true,
        lookup: {
          true: "ACTIVE",
          false: "INACTIVE"
        },
        headerStyle: {
          paddingLeft: '270px'
        }
      },
]})
