/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Page Not Found - Clip Hold",
    description: "Sorry, the information you were looking for could not be found. Please make sure you are accessing the correct page.",
    excludePageFromSearch: true,
    language: undefined,
    socialImageAssetName: "Clip_Hold_Social_TE0NTEigfDQqYTpCbg0vj.webp",
    socialImageUrl: undefined,
    status: 404,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  params[0] = params["*"]
  delete params["*"]
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    