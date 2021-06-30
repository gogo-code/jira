import React, { useEffect, useState } from "react";
import { cleanObject, useDebounce, useDocumentTitle, useMount } from "utils";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useHttp } from "utils/http";
import { Row, Typography } from "antd";
import { useAsync } from "utils/use-async";
import { Project } from "screens/project-list/list";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";

// webpack打包后的结果
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  useDocumentTitle("项目列表", false);

  const [param, setParam] = useState({ name: "", personId: "" });
  const debouncedParam = useDebounce(param, 200);
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();
  return (
    <div>
      <Row>
        <h1>项目列表</h1>
      </Row>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users || []}
      ></SearchPanel>
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
      ></List>
    </div>
  );
};
