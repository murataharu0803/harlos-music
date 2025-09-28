const ID = import.meta.env.VITE_SPREADSHEET_ID
const URL = import.meta.env.VITE_API_URL

import { useEffect, useState } from 'react'

export interface PortfolioWork {
  type: string
  name: string
  display: boolean
  youtube: string
  musescore: string
  soundcloud: string
}

export interface WorkType {
  id: string
  [key: string]: string
}

export interface Tags {
  id: string
  [key: string]: string
}

export enum Sheet {
  PORTFOLIO = 'PORTFOLIO',
  WORKTYPES = 'WORKTYPES',
  TAGS = 'TAGS',
}

export interface DataTypeMap {
  [Sheet.PORTFOLIO]: PortfolioWork
  [Sheet.WORKTYPES]: WorkType
  [Sheet.TAGS]: Tags
}

export const getData = async<Name extends Sheet>(sheet: Name) => {
  const response = await fetch(`${URL}/data/${ID}/${sheet}`)
  return await response.json() as DataTypeMap[Name][]
}

const useData = <Name extends Sheet>(table: Name) => {
  const [data, setData] = useState<DataTypeMap[Name][]>([])

  useEffect(() => {
    getData(table).then(responseData => {
      if (!responseData) console.error(`No data found for table: ${table}`)
      if (!Array.isArray(responseData)) console.error(`Data for table ${table} is not an array`)
      setData(responseData)
    })
  }, [table])

  return data
}

export default useData
