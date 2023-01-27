/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import Content from "~/components/Content.vue";

describe("Content", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(Content, {
      propsData: {
        title: "some title",
        description: "some description",
      },
    });
    expect(wrapper.text()).toMatch("some title");
  });
});
