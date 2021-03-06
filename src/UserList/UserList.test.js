import React from "react";
import { mount, shallow } from "enzyme";
import UserList from "./UserList";

describe("User List", () => {
  it("should show only the verified users when verified user button is clicked", () => {
    const userListComp = mount(<UserList />);
    userListComp
      .find(".verified-users-button")
      .first()
      .simulate("click");
    expect(userListComp.find("UserItem").length).toEqual(2);
  });
  it("should show only the top users when top user button is clicked", () => {
    const userListComp = mount(<UserList />);
    userListComp
      .find(".top-users-button")
      .first()
      .simulate("click");
    expect(userListComp.find("UserItem").length).toEqual(3);
  });
  it("should show only the anonymous users when anonymous user button is clicked", () => {
    const userListComp = mount(<UserList />);
    userListComp
      .find(".anonymous-users-button")
      .first()
      .simulate("click");
    expect(userListComp.find("UserItem").length).toEqual(1);
  });

  it("should show only all users when i select all users", () => {
    const userListComp = mount(<UserList />);
    userListComp
      .find("select")
      .at(0)
      .simulate("change", { target: { value: "all" } });

    expect(userListComp.find("UserItem").length).toEqual(2);
  });
  it("should show only active users when i select active users", () => {
    const userListComp = mount(<UserList />);
    userListComp
      .find("select")
      .at(0)
      .simulate("change", { target: { value: "active" } });

    expect(
      userListComp
        .find("UserItem")
        .at(0)
        .text()
    ).toEqual("varenya");

    expect(userListComp.find("UserItem").length).toEqual(1);
  });
  it("should show only inactive users when i select inactive users", () => {
    const userListComp = mount(<UserList />);
    userListComp
      .find("select")
      .at(0)
      .simulate("change", { target: { value: "inactive" } });

    expect(
      userListComp
        .find("UserItem")
        .at(0)
        .text()
    ).toEqual("vishwas");

    expect(userListComp.find("UserItem").length).toEqual(1);
  });
});
