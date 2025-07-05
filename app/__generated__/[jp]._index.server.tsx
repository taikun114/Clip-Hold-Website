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
    title: "Clip Hold - macOS用のクリップボードと定型文マネージャー",
    description: "Clip Holdはただのクリップボードマネージャーではありません。\n10年以上Macを使い続けているパワーユーザーの私が考えた、大変便利な機能がたくさん詰まったクリップボードマネージャーアプリです。",
    excludePageFromSearch: false,
    language: "ja-jp",
    socialImageAssetName: "Clip_Hold_Social-ja_FwhRk0b8xy2H06AW7fnhQ.webp",
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    