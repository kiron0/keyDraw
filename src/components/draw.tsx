"use client"

import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export default function Draw() {
          const [elements, setElements] = useState<ExcalidrawElement[]>([]);

          const handleChanges = (elements: ExcalidrawElement[]) => {
                    setElements(elements);
                    typeof window !== "undefined" && window.localStorage.setItem("saved-elements", JSON.stringify(elements));
          }

          useEffect(() => {
                    const savedElements = typeof window !== "undefined" && window.localStorage.getItem("saved-elements");

                    if (savedElements) {
                              setElements(JSON.parse(savedElements) as ExcalidrawElement[]);
                    }
          }, []);

          return (
                    <div style={{ height: "100vh" }}>
                              <Excalidraw
                                        initialData={{ elements }}
                                        onChange={(excalidrawElements, appState, files) => {
                                                  handleChanges(excalidrawElements as ExcalidrawElement[]);
                                        }}
                              >
                                        <MainMenu>
                                                  <MainMenu.DefaultItems.LoadScene />
                                                  <MainMenu.DefaultItems.Export />
                                                  <MainMenu.DefaultItems.SaveAsImage />
                                                  <MainMenu.DefaultItems.ClearCanvas />
                                                  <hr className="my-2" />
                                                  <MainMenu.DefaultItems.ToggleTheme />
                                                  <MainMenu.DefaultItems.ChangeCanvasBackground />
                                        </MainMenu>
                                        <WelcomeScreen>
                                                  <WelcomeScreen.Hints.ToolbarHint />
                                                  <WelcomeScreen.Hints.MenuHint />
                                                  <WelcomeScreen.Center>
                                                            <WelcomeScreen.Center.Logo>
                                                                      <Image
                                                                                src="/logo.png"
                                                                                alt="Excalidraw Logo"
                                                                                width="170"
                                                                                height="170"
                                                                      />
                                                            </WelcomeScreen.Center.Logo>
                                                            <WelcomeScreen.Center.Heading>
                                                                      KeyDraw - Draw your thoughts today!
                                                            </WelcomeScreen.Center.Heading>
                                                            <WelcomeScreen.Center.Heading>
                                                                      by Toufiq Hasan Kiron
                                                            </WelcomeScreen.Center.Heading>
                                                            <WelcomeScreen.Center.Menu>
                                                                      <WelcomeScreen.Center.MenuItemLoadScene />
                                                                      <WelcomeScreen.Center.MenuItemLink href="https://github.com/kiron0" icon={<FiGithub size={16} />}>
                                                                                GitHub
                                                                      </WelcomeScreen.Center.MenuItemLink>
                                                                      <WelcomeScreen.Center.MenuItemLink href="https://github.com/kiron0" icon={<FaLinkedin size={16} />}>
                                                                                LinkedIn
                                                                      </WelcomeScreen.Center.MenuItemLink>
                                                            </WelcomeScreen.Center.Menu>
                                                  </WelcomeScreen.Center>
                                        </WelcomeScreen>
                              </Excalidraw>
                    </div>
          )
}