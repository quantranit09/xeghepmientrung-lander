import type { ComponentType } from "react";
import {
  ArticleDatXeRiengDaNangQuangBinhContent,
  ArticleDatXeRiengDaNangQuangTriContent,
  ArticleKinhNghiemThueXeRiengMienTrungContent,
  ArticleMeoDatXeHopDongTietKiemContent,
  ArticleSoSanhXeKhachVaXeRiengContent,
  ArticleThueXeRiengAnToanChoGiaDinhContent,
  ArticleThueXeDaNangDiHaiLangContent,
  ArticleTimXeGhepDaNangQuangTriContent,
  ArticleTransferDaNangHueContent,
  ArticleXeDaNangDiDongHaContent,
  ArticleXeDaNangDiLaVangContent,
  ArticleXeDaNangDiLaoBaoContent,
  ArticleXeSanBayDaNangDiQuangTriContent,
} from "@/content/generated";
import type { ArticleSlug } from "@/content/routes";

export const articleContentBySlug: Record<ArticleSlug, ComponentType> = {
  "dat-xe-rieng-da-nang-quang-tri": ArticleDatXeRiengDaNangQuangTriContent,
  "thue-xe-da-nang-di-hai-lang": ArticleThueXeDaNangDiHaiLangContent,
  "xe-da-nang-di-dong-ha": ArticleXeDaNangDiDongHaContent,
  "xe-san-bay-da-nang-di-quang-tri":
    ArticleXeSanBayDaNangDiQuangTriContent,
  "tim-xe-ghep-da-nang-quang-tri": ArticleTimXeGhepDaNangQuangTriContent,
  "xe-da-nang-di-la-vang": ArticleXeDaNangDiLaVangContent,
  "xe-da-nang-di-lao-bao": ArticleXeDaNangDiLaoBaoContent,
  "dat-xe-rieng-da-nang-quang-binh": ArticleDatXeRiengDaNangQuangBinhContent,
  "transfer-da-nang-hue": ArticleTransferDaNangHueContent,
  "kinh-nghiem-thue-xe-rieng-mien-trung":
    ArticleKinhNghiemThueXeRiengMienTrungContent,
  "meo-dat-xe-hop-dong-tiet-kiem": ArticleMeoDatXeHopDongTietKiemContent,
  "so-sanh-xe-khach-va-xe-rieng": ArticleSoSanhXeKhachVaXeRiengContent,
  "thue-xe-rieng-an-toan-cho-gia-dinh":
    ArticleThueXeRiengAnToanChoGiaDinhContent,
};
