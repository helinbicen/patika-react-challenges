import React from "react";
import "@testing-library/jest-dom";
import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Header from "./Header";
import EmojiResults from "./EmojiResults";

describe("app test", () => {
  beforeEach(() => render(<App />));

  test("header", () => {
    const headerTitle = screen.getByText("Emoji Search");

    expect(headerTitle).toBeInTheDocument();
  });

  test("emoji list", () => {
    const items = screen.getAllByText('Click to copy emoji');
    expect(items.length).toEqual(20);
  });

  test('filter', () => {
    const emoji = '100';
    const input = screen.getByRole('textbox');
    userEvent.type(input, emoji);
    expect(screen.getByText(emoji)).toBeInTheDocument;
  });

  test('copy', () => {
    const copyText = screen.getAllByText("Click to copy emoji");
    userEvent.click(copyText);
    const input = screen.getByRole("textbox");
    userEvent.paste(input, copyText);
    expect(input.length === 1);
  })
});
