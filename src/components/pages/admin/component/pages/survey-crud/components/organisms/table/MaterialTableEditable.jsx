import React, { useState, useEffect } from 'react';
import MaterialTable from '@material-table/core';
import axios from 'axios';
import { deleteQuestions, addQuestions, editQuestions } from '../../../../../../../../../services/Question';
import { useDispatch } from 'react-redux';

import config from '../../../../../../../../../config'

const request = axios.create({
  baseURL: config().api.url,
});


const MaterialTableEditable = (props) => {

  const [data, setData] = useState ([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dataLoad();
  },[]);

  const dataLoad = () => {
    request.get("/Survey/"+props.row).then(response => {
      setData(response.data);
    }).catch(e => {
        console.log(e);
    })
  }

  return (
    <MaterialTable
        title={props.title}
        columns={props.header}
        data={data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const forNewData = {
                  ID: newData.Q_ID,
                  QUESTIONS: newData.QUESTIONS,
                  TYPE: props.row,
                  STATUS: JSON.parse(newData.STATUS)
                }
                addQuestions(dispatch, forNewData);
                setData([...data, newData]);
                resolve();
                dataLoad();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const editedData = {
                  Q_ID : oldData.Q_ID,
                  QUESTIONS : newData.QUESTIONS,
                  TYPE : props.row,
                  STATUS: JSON.parse(newData.STATUS)
                }
                editQuestions(dispatch, editedData)
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                deleteQuestions(dispatch, oldData.Q_ID)
                setData([...dataDelete]);
                resolve();
              }, 1000);
            })
        }}
      />
  )
}

export default MaterialTableEditable
