import React from "react";
import { chefs } from "../../_mock-data.ts/chefs";
import ListItem from "../components/UI/list-item/ListItem";
import { List } from "../components/UI/list/List";
import PageAnimator from "../utils/PageAnimator";

function ChefsPage() {
  return (
    <PageAnimator>
      <div className="full center">
        <List>
          {chefs.map((r) => (
            <ListItem url={r.url} title={r.name}></ListItem>
          ))}
        </List>
      </div>
    </PageAnimator>
  );
}

export default ChefsPage;
