/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import id from "../pages/content/_id.vue";

describe("NavBar", () => {
  // mount the component
  const wrapper = mount(id);
  it("displays the correct data", () => {
    // set the data
    wrapper.setData({
      content: {
        url: "",
        id: "",
        title: "",
        description: "",
      },
    });
    expect(wrapper.text()).toContain("");
  });

  it("has a content data property", () => {
    expect(wrapper.vm.content).toBeDefined();
  });
});
