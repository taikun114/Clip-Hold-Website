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
    title: "履歴データを手動でアップグレードする - Clip Hold",
    description: "このドキュメントでは、バージョン1.3.0以降で、履歴データを手動でアップグレードする方法を紹介しています。",
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
    