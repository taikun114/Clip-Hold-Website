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
    title: "Clip Holdの便利な使い方 - Clip Hold",
    description: "このドキュメントでは、Clip Holdを使いこなして生産性を高めるために、様々な便利な使い方をご紹介しています。",
    excludePageFromSearch: false,
    language: "ja-jp",
    socialImageAssetName: "Clip_Hold_Social-ja_FwhRk0b8xy2H06AW7fnhQ.webp",
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
    