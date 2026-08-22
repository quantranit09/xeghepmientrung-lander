import type { ComponentType } from "react";
import {
  ArticleDatXeRiengDaNangQuangBinhContent,
  ArticleDatXeRiengDaNangQuangTriContent,
  ArticleKinhNghiemThueXeRiengMienTrungContent,
  ArticleMeoDatXeHopDongTietKiemContent,
  ArticleSoSanhXeKhachVaXeRiengContent,
  ArticleThueXeRiengAnToanChoGiaDinhContent,
  ArticleTransferDaNangHueContent,
} from "@/content/generated";
import type { ArticleSlug } from "@/content/routes";

export const articleContentBySlug: Record<ArticleSlug, ComponentType> = {
  "dat-xe-rieng-da-nang-quang-tri": ArticleDatXeRiengDaNangQuangTriContent,
  "dat-xe-rieng-da-nang-quang-binh": ArticleDatXeRiengDaNangQuangBinhContent,
  "transfer-da-nang-hue": ArticleTransferDaNangHueContent,
  "kinh-nghiem-thue-xe-rieng-mien-trung":
    ArticleKinhNghiemThueXeRiengMienTrungContent,
  "meo-dat-xe-hop-dong-tiet-kiem": ArticleMeoDatXeHopDongTietKiemContent,
  "so-sanh-xe-khach-va-xe-rieng": ArticleSoSanhXeKhachVaXeRiengContent,
  "thue-xe-rieng-an-toan-cho-gia-dinh":
    ArticleThueXeRiengAnToanChoGiaDinhContent,
};
