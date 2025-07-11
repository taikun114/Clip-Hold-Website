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
    title: "Standard Phrases Window and History Window - Clip Hold",
    description: "All standard phrases and copy history can be accessed from the Standard Phrases Window and the History Window.\nThe Standard Phrases Window can be opened by clicking \"Show All Standard Phrases...\" in the Clip Hold menu bar icon, and the History Window by clicking \"Show All Copy History...\".\nThese windows can also be opened using shortcut keys. The Standard Phrases Window opens by default with Control + Command + V, and the History Window with Option + Command + V.",
    excludePageFromSearch: false,
    language: "",
    socialImageAssetName: "Clip_Hold_Social_TE0NTEigfDQqYTpCbg0vj.webp",
    socialImageUrl: undefined,
    status: undefined,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    