/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import id from "../pages/content/_id.vue";

describe("NavBar", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(id);
    expect(wrapper.vm).toBeTruthy();
  });
});
