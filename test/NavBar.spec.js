/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar";

describe("NavBar", () => {
  const wrapper = mount(NavBar);
  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("renders navbar message when passed", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.text()).toContain("Início");
  });

  it("renders navbar message when passed", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.text()).toContain("Site");
  });
});
