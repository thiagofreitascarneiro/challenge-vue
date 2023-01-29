/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import LinkContent from "@/components/LinkContent";

describe("LinkContent", () => {
  const wrapper = shallowMount(LinkContent, {
    propsData: {
      linkProps: {
        url: "",
      },
    },
  });
  it("renders the correct props Data", () => {
    expect(wrapper.vm.linkProps).toEqual({ url: "" });
    expect(typeof wrapper.vm.linkProps).toBe("object");
  });

  it("has a linkProps data property", () => {
    expect(wrapper.vm.linkProps).toBeDefined();
  });

  it("button text should be correct", () => {
    const button = wrapper.find("button");
    expect(button.text()).toBe("visualizar o conteúdo");
  });
});
