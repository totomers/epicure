import React from "react";
// import { chefs } from "../../_mock-data.ts/chefs";
import ListItem from "../components/UI/list-item/ListItem";
import { List } from "../components/UI/list/List";
import PageAnimator from "../utils/PageAnimator";
import { useGetAllChefsQuery } from "../../services/epicure";
import { SERVER_DEVELOPMENT_URL } from "../../CONFIG";
function ChefsPage() {
  const { data, error, isLoading } = useGetAllChefsQuery(null);
  console.log(data);
  const chefs = data?.chefs;
  return (
    <PageAnimator>
      <div className="full center">
        {data && (
          <List>
            {chefs?.map((c) => (
              <ListItem
                url={SERVER_DEVELOPMENT_URL + c.url}
                title={c.name}
                key={c._id}
              ></ListItem>
            ))}
          </List>
        )}
      </div>
    </PageAnimator>
  );
}

export default ChefsPage;
