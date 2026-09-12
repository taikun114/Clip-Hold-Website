/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System; resources?: Record<string, any> }) => {
  const _data = new Map<string, ResourceRequest>([
  ])
  const _contentData = new Map<string, ResourceRequest>()
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action, contentData: _contentData }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "ニュース - Clip Hold",
    description: "Clip Holdに関する最新情報を取り扱っています。",
    excludePageFromSearch: false,
    language: "ja-jp",
    socialImageAssetName: "Clip_Hold_Social-ja_3731BMDfmvMqR8o3iej-U.webp",
    socialImageUrl: undefined,
    status: undefined,
    redirect: "",
    content: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    