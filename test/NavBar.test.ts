import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import NavBarVue from "../src/components/NavBar.vue";

test("Mounts component and assures button works correctly", async () => {
  expect(NavBarVue).toBeTruthy();

  const wrapper = mount(NavBarVue);

  expect(wrapper.get("[data-cy=nav-bar]")).toBeTruthy();

  await wrapper.get("[data-cy=nav-links-button]").trigger("click");

  expect(wrapper.get("[data-cy=nav-links-mobile]")).toBeTruthy();
});
