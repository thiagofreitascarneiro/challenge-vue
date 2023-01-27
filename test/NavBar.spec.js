/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("NavBar", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("NavBar", () => {
  it("renders navbar message when passed", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.text()).toContain("Início");
  });

  it("renders navbar message when passed", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.text()).toContain("Site");
  });
});
